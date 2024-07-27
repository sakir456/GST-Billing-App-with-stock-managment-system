import Invoice from "../models/invoice.model.js";

export const createInvoice  = async(req,res) => {
    try {
        const {partyName,billingName,Email,poNo,poDate,ewayBillNo,invoiceNo, invoiceDate, items, pandfAmount,GrandTotal} = req.body;
        const newInvoice = new Invoice({
            partyName,
            billingName,
            Email,
            poNo,
            poDate,
            ewayBillNo,
            invoiceNo, 
            invoiceDate, 
            items, 
            pandfAmount,
            GrandTotal  
        })
        await newInvoice.save()
        return res.status(201).json(newInvoice)
    } catch (error) {
        console.error("error creating invoice", error)
        return res.status(500).json({error: "Server error"})
    }
}

export const getInvoices = async(req,res) => {
    try {
       const invoices = await Invoice.find()
       return res.status(200).json(invoices); 
    } catch (error) {
       console.error("error fetching invoices", error) 
       return res.status(500).json({error: "Server error"})
    }
}

export const updateInvoice = async(req,res)=> {
   try {
    const {partyName,billingName,Email,poNo,poDate,ewayBillNo,invoiceNo, invoiceDate, items, pandfAmount,GrandTotal} = req.body;
    const updatedInvoice = await Invoice.findByIdAndUpdate(
        req.params.id,
        {partyName,billingName,Email,poNo,poDate,ewayBillNo,invoiceNo, invoiceDate, items, pandfAmount,GrandTotal},
        {new:true, runValidators:true}
    )
    if(!updatedInvoice){
        return res.status(404).json({error: "Invoice not found"})
    }
    return res.status(200).json(updatedInvoice)
   } catch (error) {
      return res.status(500).json({error: "Server error"})
   } 
}

export const deleteInvoice = async(req,res) => {
    try {
        const deletedInvoice = await Invoice.findByIdAndDelete(req.params.id)
    if(!deletedInvoice){
        return res.status(404).json({error: "Invoice not found"})
    }
    return res.status(200).json({message: "Invoice deleted successfully"})
    } catch (error) {
        console.error("error deleting invoice", error)
        return res.status(500).json({error: "Server error"})
    }
    
}