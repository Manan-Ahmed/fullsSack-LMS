import { BatchModal } from "@/components/Dialogs/batchmodal";
import { BatchesTable } from "@/components/ui/dataTables/batchTable";




export default function Batches(){
    return(
        <>
        <div className="min-h-screen p-10">
            <div className="flex justify-between">
            <h1 className="text-center font-bold">Batches</h1>

                <BatchModal/>
            </div>
<BatchesTable/>
        </div>
        </>
    )
}