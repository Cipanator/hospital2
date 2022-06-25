import { Routes, Route } from "react-router-dom";
import { Main } from "../Main/Main";
import { NotFound } from "../NotFound/NotFound";
import { AboutClinic } from "../Clinic/AboutClinic";
import { WorkingHours } from "../Clinic/WorkingHours";
import { Licenses } from "../Clinic/Licenses";
import { Reviews } from "../Clinic/Reviews";
import { Therapy } from "../Directions/Therapy";
import { Urology } from "../Directions/Urology";
import { Gynecology } from "../Directions/Gynecology";
import { Surgery } from "../Directions/Surgery";
import { Neurology } from "../Directions/Neurology";
import { Otorhinolaryngology } from "../Directions/Otorhinolaryngology";
import { Ophthalmology } from "../Directions/Ophthalmology";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about_clinic" element={<AboutClinic/>} />
            <Route path="/working_Hours" element={<WorkingHours/>} />
            <Route path="/Licenses" element={<Licenses/>} />
            <Route path="/Reviews" element={<Reviews/>} />
            <Route path="/Therapy" element={<Therapy/>} />
            <Route path="/Urology" element={<Urology/>} />
            <Route path="/Gynecology" element={<Gynecology/>} />
            <Route path="/Surgery" element={<Surgery/>} />
            <Route path="/Neurology" element={<Neurology/>} />
            <Route path="/Otorhinolaryngology" element={<Otorhinolaryngology/>} />
            <Route path="/Ophthalmology" element={<Ophthalmology/>} />
        </Routes>
    )
}
// <NavDropdown.Item href="/therapy">Терапия</NavDropdown.Item>
/* <NavDropdown.Divider />
<NavDropdown.Item href="/gynecology">Гинекология</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="/surgery">Хирургия</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="/urology">Урология</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="/neurology">Неврология</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="/otorhinolaryngology">Оториноларингология</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="/ophthalmology">Офтальмоголия</NavDropdown.Item>
<NavDropdown.Divider />
<NavDropdown.Item href="/dentistry">Стоматология</NavDropdown.Item> */