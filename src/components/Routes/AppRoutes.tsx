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
import { Dentistry } from "../Directions/Dentistry";
import { Therapist } from "../Specialists/Therapist";
export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Main />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/about_clinic" element={<AboutClinic/>} />
            <Route path="/working_Hours" element={<WorkingHours/>} />
            <Route path="/licenses" element={<Licenses/>} />
            <Route path="/reviews" element={<Reviews/>} />
            <Route path="/therapy" element={<Therapy/>} />
            <Route path="/urology" element={<Urology/>} />
            <Route path="/gynecology" element={<Gynecology/>} />
            <Route path="/surgery" element={<Surgery/>} />
            <Route path="/neurology" element={<Neurology/>} />
            <Route path="/otorhinolaryngology" element={<Otorhinolaryngology/>} />
            <Route path="/ophthalmology" element={<Ophthalmology/>} />
            <Route path="/dentistry" element={<Dentistry/>} />
            <Route path="/therapist" element={<Therapist/>} />
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