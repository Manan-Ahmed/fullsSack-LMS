import { CourseDialog } from "@/components/Dialogs/addcoursemodal";
import { CourseTable } from "@/components/ui/dataTables/coursetable";



export default function Course(){
    return(
        <>
        <div className="min-h-screen p-10">
            <div className="flex justify-between">
            <h1 className="text-center font-bold">Courses</h1>
<CourseDialog/>
            </div>
        <CourseTable/>
        </div>
        </>
    )
}