
import Item from "../models/item.model.js";
import Party from "../models/party.model.js";
import PurchaseInvoice from "../models/purchaseinvoice.model.js";

export const createInvoice = async (req, res) => {
    try {
        const { purchaseItems, partyInfo, grandTotal } = req.body;
        const {
            partyName, billingName, email, poNo, poDate, ewayBillNo, invoiceNo, invoiceDate
        } = partyInfo;
        const { pandfAmount, grandTotal: totalAmount } = grandTotal;

        const newInvoice = new PurchaseInvoice({
            partyName,
            billingName,
            email,
            poNo,
            poDate,
            ewayBillNo,
            invoiceNo,
            invoiceDate,
            purchaseItems,
            pandfAmount,
            grandTotal: totalAmount
        });
        await newInvoice.save();
        return res.status(201).json(newInvoice);
    } catch (error) {
        console.error("Error creating invoice", error);
        return res.status(500).json({ error: "Server error" });
    }
};



export const getInvoices = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const query = {};

    if (startDate && endDate) {
      query.invoiceDate = {
        $gte: new Date(new Date(startDate).setHours(0, 0, 0, 0)),
        $lte: new Date(new Date(endDate).setHours(23, 59, 59, 999))
      };
    }

    const invoices = await PurchaseInvoice.find(query);

    if (!invoices) {
      return res.status(404).json({ error: "No invoices found" });
    }
    return res.status(200).json(invoices);
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getInvoice = async(req,res) => {
  const {invoiceId} = req.params
    try {
      const invoice = await PurchaseInvoice.findById(req.params.id)
      if(!invoice){
        return res.status(404).json({error: "Invoice not found "})
      }
      const partyDetails = await Party.findOne({ partyName: invoice.partyName });
      const itemDetails = await Promise.all(
        invoice.purchaseItems.map(async(purchaseItem)=> {
          return await Item.findOne({itemName: purchaseItem.itemName})
        }) 
      )
      const foundItemDetails = itemDetails.filter(item => item!==null)
      return res.status(200).json({invoice, partyDetails: partyDetails || null, itemDetails: foundItemDetails})
    } catch (error) {
       console.error("Error fetching invoice ", error);
       return res.status(500).json({ error: "Server error" });
    }
}

     




// export const getInvoices = async (req, res) => {
//   try {
//     const invoices = await Invoice.find();
//     if (!invoices) {
//       return res.status(404).json({ error: "No invoices found" });
//     }
//     return res.status(200).json(invoices);
//   } catch (error) {
//     console.error("Error fetching invoices:", error);
//     return res.status(500).json({ error: "Server error" });
//   }
// };


export const updateInvoice = async (req, res) => {
    try {
      const { purchaseItems, partyInfo, grandTotal } = req.body;
      const {
        partyName, billingName, email, poNo, poDate, ewayBillNo, invoiceNo, invoiceDate
      } = partyInfo;
      const { pandfAmount, grandTotal: totalAmount } = grandTotal;
  
      const updatedInvoice = await PurchaseInvoice.findByIdAndUpdate(
        req.params.id,
        {
          partyName,
          billingName,
          email,
          poNo,
          poDate,
          ewayBillNo,
          invoiceNo,
          invoiceDate,
          purchaseItems,
          pandfAmount,
          grandTotal: totalAmount
        },
        { new: true, runValidators: true }
      );
  
      if (!updatedInvoice) {
        return res.status(404).json({ error: "Invoice not found" });
      }
  
      return res.status(200).json(updatedInvoice);
    } catch (error) {
      console.error("Error updating invoice", error);
      return res.status(500).json({ error: "Server error" });
    }
  };

export const deleteInvoice = async(req,res) => {
    try {
        const deletedInvoice = await PurchaseInvoice.findByIdAndDelete(req.params.id)
    if(!deletedInvoice){
        return res.status(404).json({error: "Invoice not found"})
    }
    return res.status(200).json({message: "Invoice deleted successfully"})
    } catch (error) {
        console.error("error deleting invoice", error)
        return res.status(500).json({error: "Server error"})
    }
    
}

export const highestInvoice = async(req,res) => {
  try {
    const highestInvoice = await PurchaseInvoice.findOne().sort('-invoiceNo').exec();
    
    res.json({highestInvoiceNo:highestInvoice ? highestInvoice.invoiceNo : 0})
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching the highest invoice number.' });
  }
}