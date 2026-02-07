import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import ForFounders from "./pages/ForFounders";
import FoundersApplication from "./pages/FoundersApplication";
import ForCollegesStudents from "./pages/ForCollegesStudents";
import CollegesRegistration from "./pages/CollegesRegistration";
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/for-founders" element={<ForFounders />} />
          <Route path="/founders-apply" element={<FoundersApplication />} />
          <Route path="/for-colleges-students" element={<ForCollegesStudents />} />
          <Route path="/colleges-register" element={<CollegesRegistration />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}
