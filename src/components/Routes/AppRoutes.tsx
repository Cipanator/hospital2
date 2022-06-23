import { Routes, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { AboutClinic } from "../Clinic/AboutClinic";
import { WorkingHours } from "../Clinic/WorkingHours";
import { Licenses } from "../Clinic/Licenses";
import { Reviews } from "../Clinic/Reviews";


export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about_clinic" element={<AboutClinic/>} />
            <Route path="/working_Hours" element={<WorkingHours/>} />
            <Route path="/Licenses" element={<Licenses/>} />
            <Route path="/Reviews" element={<Reviews/>} />
        </Routes>
    )
}