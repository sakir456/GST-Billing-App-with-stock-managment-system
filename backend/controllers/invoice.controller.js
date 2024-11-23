import Invoice from "../models/invoice.model.js";
import Item from "../models/item.model.js";
import Party from "../models/party.model.js";

export const createInvoice = async (req, res) => {
  try {
    const { saleItems, partyInfo, grandTotal } = req.body;
    const {
      partyName,
      billingName,
      email,
      poNo,
      poDate,
      ewayBillNo,
      invoiceNo,
      invoiceDate,
    } = partyInfo;
    const { pandfAmount, grandTotal: totalAmount } = grandTotal;

    const newInvoice = new Invoice({
      userId: req.user._id,
      partyName,
      billingName,
      email,
      poNo,
      poDate,
      ewayBillNo,
      invoiceNo,
      invoiceDate,
      saleItems,
      pandfAmount,
      grandTotal: totalAmount,
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
        $lte: new Date(new Date(endDate).setHours(23, 59, 59, 999)),
      };
    }

    const invoices = await Invoice.find({
      ...query,
      userId: req.user._id, // Add user filtering here directly
    });
    if (!invoices) {
      return res.status(404).json({ error: "No invoices found" });
    }
    return res.status(200).json(invoices);
  } catch (error) {
    console.error("Error fetching invoices:", error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getInvoice = async (req, res) => {
  const { invoiceId } = req.params;

  try {
    const invoice = await Invoice.findOne({
      _id: req.params.id,
      userId: req.user._id,
    });

    if (!invoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    const partyDetails = await Party.findOne({
      partyName: invoice.partyName,
      userId: req.user._id,
    });

    const itemDetails = await Promise.all(
      invoice.saleItems.map(async (saleItem) => {
        return await Item.findOne({
          itemName: saleItem.itemName,
          userId: req.user._id,
        });
      })
    );

    const foundItemDetails = itemDetails.filter((item) => item !== null);

    return res
      .status(200)
      .json({
        invoice,
        partyDetails: partyDetails || null,
        itemDetails: foundItemDetails,
      });
  } catch (error) {
    console.error("Error fetching invoice ", error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const getChartData = async (req, res) => {
  try {
    const chartData = await Invoice.aggregate([
      {
        $match: { userId: req.user._id }, // Filter by authenticated user's ID
      },
      {
        $group: {
          _id: {
            $dateToString: { format: "%Y-%m-%d", date: "$invoiceDate" }, // Groups by full date
          },
          totalAmount: { $sum: "$grandTotal" }, // Sum of grandTotal for each date
        },
      },
      {
        $sort: { _id: 1 }, // Sort by full date (ascending)
      },
    ]);

    // if (chartData.length === 0) {
    //   return res.status(404).json({ error: "No chart data found" });
    // }

   
    const formattedData = chartData.map((item) => ({
      date: item._id, 
      amount: item.totalAmount, 
    }));

    return res.status(200).json(formattedData);
  } catch (error) {
    console.error("Error fetching ChartData ", error);
    return res.status(500).json({ error: "Server error" });
  }
};

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
    const { saleItems, partyInfo, grandTotal } = req.body;
    const {
      partyName,
      billingName,
      email,
      poNo,
      poDate,
      ewayBillNo,
      invoiceNo,
      invoiceDate,
    } = partyInfo;
    const { pandfAmount, grandTotal: totalAmount } = grandTotal;

    const updatedInvoice = await Invoice.findOneAndUpdate(
      { _id: req.params.id, userId: req.user._id },
      {
        partyName,
        billingName,
        email,
        poNo,
        poDate,
        ewayBillNo,
        invoiceNo,
        invoiceDate,
        saleItems,
        pandfAmount,
        grandTotal: totalAmount,
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

export const deleteInvoice = async (req, res) => {
  try {
    const deletedInvoice = await Invoice.findOneAndDelete({
      _id: req.params.id,
      userId: req.user._id, 
    });

    if (!deletedInvoice) {
      return res.status(404).json({ error: "Invoice not found" });
    }

    return res.status(200).json({ message: "Invoice deleted successfully" });
  } catch (error) {
    console.error("Error deleting invoice", error);
    return res.status(500).json({ error: "Server error" });
  }
};

export const highestInvoice = async (req, res) => {
  try {
    const highestInvoice = await Invoice.findOne({ userId: req.user._id }) // Filter by userId
      .sort("-invoiceNo")
      .exec();

    res.json({
      highestInvoiceNo: highestInvoice ? highestInvoice.invoiceNo : 0,
    });
  } catch (error) {
    console.error("Error fetching highest invoice number", error);
    res
      .status(500)
      .json({
        error: "An error occurred while fetching the highest invoice number.",
      });
  }
};
