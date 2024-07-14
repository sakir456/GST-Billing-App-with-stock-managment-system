import Item from "../models/item.model.js";


export const addItem  = async(req,res) => {
    try {
        const {itemName, hsnCode, category,salePrice,purchasePrice,taxRate,openingQuantity,stockPrice,salePriceTax,purchasePriceTax,quantityUnit} = req.body;
        if(!itemName) {
           return res.status({error:"Name is required"})
        }

        const newItem = new Item({
            itemName,
            hsnCode,
            category,
            salePrice,
            purchasePrice,
            taxRate,
            openingQuantity,
            stockPrice,
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
       const items =  await Item.find();
       return res.status(200).json(items); 
    } catch (error) {
        console.error('Error fetching items:', error);
        return res.status(500).json({error: "Server error"})
    }
}

export const getItem = async (req,res) => {
    try{
     const item = await Item.findById(req.params.id);
     if(!item){
        return res.status(404).json({error: "Item not found"})
     }
     return res.status(200).json(item);
    } catch (error){
        console.error('Error fetching items:', error);
        return res.status(500).json({error: "Server error"});
    }
}

export const updateItem = async (req,res) => {
    try {
        const {itemName, hsnCode, category,salePrice,purchasePrice,taxRate,openingQuantity,stockPrice,salePriceTax,purchasePriceTax,quantityUnit} = req.body;
        const updatedItem = await Item.findByIdAndUpdate(
            req.params.id,
            {itemName, hsnCode, category,salePrice,purchasePrice, taxRate,openingQuantity,stockPrice,salePriceTax,purchasePriceTax,quantityUnit},
            {new:true, runValidators:true}
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
        const deletedItem  = await Item.findByIdAndDelete(req.params.id);
        if(!deletedItem) {
            return res.status(404).json({error: "Item not found "})
        }
        return res.status(200).json({message: "Item deleted successfully"});
    } catch (error) {
        console.error('Error deleting item:', error);
        return res.status(500).json({error: "Server error"})
    }
}