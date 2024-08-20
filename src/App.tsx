import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Step1 from "./page/YourInfo";
import Step2 from "./page/SelectPlan";
import Step3 from "./page/AddOns";
import Step4 from "./page/Summary";
import Step5 from "./page/Result";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Step1 />,
  },
  {
    path: "/step2",
    element: <Step2 />,
  },
  {
    path: "/step3",
    element: <Step3 />,
  },
  {
    path: "/step4",
    element: <Step4 />,
  },
  {
    path: "/step5",
    element: <Step5 />,
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
