import Item from "../models/item.model.js";


export const addItem  = async(req,res) => {
    try {
        const {itemName, hsnCode, category,salePrice,purchasePrice,taxRate,openingQuantity,
            stockInHand,salePriceTax,purchasePriceTax,quantityUnit} = req.body;
        if(!itemName) {
           return res.status({error:"Name is required"})
        }
        const existingItem = await Item.findOne({ itemName, userId: req.user._id  });
        if (existingItem) {
            return res.status(400).json({ error: "Item with the same name already exists" });
        }

        const newItem = new Item({
            userId: req.user._id,
            itemName,
            hsnCode,
            category,
            salePrice,
            purchasePrice,
            taxRate,
            openingQuantity,
            stockInHand,
            salePriceTax,
            purchasePriceTax,
            quantityUnit
        });

        await newItem.save();
        return res.status(201).json(newItem)
    } catch (error) {
        console.error("Error adding item", error);
        return res.status(500).json({error: "Server error"})
        
    }
}

export const getItems = async (req,res) => {
    try {
       const items =  await Item.find({ userId: req.user._id });
       return res.status(200).json(items); 
    } catch (error) {
        console.error('Error fetching items:', error);
        return res.status(500).json({error: "Server error"})
    }
}

export const getItem = async (req, res) => {
    try {
        const item = await Item.findOne({ _id: req.params.id, userId: req.user._id });

        if (!item) {
            return res.status(404).json({ error: "Item not found or access denied" });
        }

        return res.status(200).json(item);
    } catch (error) {
        console.error('Error fetching item:', error);
        return res.status(500).json({ error: "Server error" });
    }
};

export const updateItem = async (req,res) => {
    try {
        const {itemName, hsnCode, category,salePrice,purchasePrice,taxRate,openingQuantity,stockInHand,salePriceTax,purchasePriceTax,quantityUnit} = req.body;
         
        const existingItem = await Item.findOne({ 
            itemName,
            userId: req.user._id,
            _id: { $ne: req.params.id }
         });
        if (existingItem) {
            return res.status(400).json({ error: "Item with the same name already exists" });
        }

        const updatedItem = await Item.findOneAndUpdate(
            { _id: req.params.id, userId: req.user._id },
            { itemName, hsnCode, category, salePrice, purchasePrice, taxRate, openingQuantity, stockInHand, salePriceTax, purchasePriceTax, quantityUnit },
            { new: true, runValidators: true }
        );
        if(!updatedItem){
            return res.status(404).json({error: "Item not found"})
        }

        return res.status(200).json(updatedItem)
    } catch (error) {
        return res.status(500).json({error: "Server error"})
    }
};

export const deleteItem = async (req, res)=> {
    try {
        const deletedItem = await Item.findOneAndDelete({ _id: req.params.id, userId: req.user._id });
        if(!deletedItem) {
            return res.status(404).json({error: "Item not found "})
        }
        return res.status(200).json({message: "Item deleted successfully"});
    } catch (error) {
        console.error('Error deleting item:', error);
        return res.status(500).json({error: "Server error"})
    }
}