

const PurchaseFormTableHeader = () => {
  return (
    <div className="flex h-10  bg-gray-100  border-2 border-gray-300 font-normal items-center justify-between">
    <div className="w-1/12 flex pl-1 justify-center border-r-2 h-full  items-center ">#</div>
                <div className="w-2/4 flex border-r-2 h-full items-center pl-2  ">Item</div>
                <div className="w-1/12 flex  justify-center pl-1 border-r-2 h-full  items-center ">QTY</div>
                <div className="w-1/6 text-center border-r-2 pl-1 h-full flex items-center justify-center">Price/Unit</div>

                <div className="flex flex-col w-1/6 text-center border-r-2 h-full ">
                <div className="w-full h-1/2 text-center border-b-2  flex items-center justify-center text-sm">Discount </div>
                <div className="w-full h-1/2 text-center flex items-center " >
                 <div className="w-1/2 border-r-2 text-center text-xs">%</div>
                 <div className="w-1/2 text-center text-xs">Amount</div>
                </div>
                </div>


                <div className="flex flex-col w-1/6 text-center border-r-2 h-full ">
                  <div className="w-full h-1/2 text-center border-b-2  flex items-center justify-center text-sm">Tax </div>
                  <div className="w-full h-1/2 text-center flex items-center " >
                  <div className="w-1/2 border-r-2 text-center text-xs">%</div>
                  <div className="w-1/2 text-center text-xs">Amount</div>
                  </div>
                </div>


                <div className="w-1/6 text-center  h-full pl-1 flex items-center justify-center">Amount</div>
     </div> 
  )
}

export default PurchaseFormTableHeader