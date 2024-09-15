import './App.css'
import * as React from 'react';
import {
  FluentProvider,
  webLightTheme,
  useId,
  Toast,
  ToastTitle,
  ToastBody,
  useToastController,
  Toaster
} from '@fluentui/react-components';
import ResultsDisplay from './components/resultsDisplay';
import { getCareerAdvice } from './requests/planLearning';
import LandingPage from './components/landingPage';


function App() {

  const [showResults, setShowResults] = React.useState(false);
  const [learningPath, setLearningPath] = React.useState<any>(null);
  const toasterId = useId("toaster");
  const { dispatchToast } = useToastController(toasterId);

  const handleBackClick = () => {
    setShowResults(false)
  }

  const handlePlanCareerClick = async (formstate: any) => {

    try {
      if (formstate.resume.trim() === "" || formstate.jobDescription.trim() === "") {
        dispatchToast(
          <Toast>
            <ToastTitle>Error</ToastTitle>
            <ToastBody subtitle="Fill in the required fields before continuing.">Resume and Job Description must not be empty!</ToastBody>
          </Toast>,
          { intent: "error" }
        );
        setTimeout(() => {
          dispatchToast(null);
        }, 3000);
        return;
      }

      let response = await getCareerAdvice(formstate)
      setLearningPath(response)

      setTimeout(() => {
        setShowResults(true)
      }, 3000);

    } catch (error) {
      console.error('Error fetching learning path:', error);
    }
  };

  return (
    <FluentProvider theme={webLightTheme}>
      <div>
        {!showResults && <LandingPage handlePlanCareerClick={handlePlanCareerClick} />}
        {showResults && <ResultsDisplay learningPath={learningPath} handleBackClick={handleBackClick} />}
        <Toaster toasterId={toasterId} />
      </div>
    </FluentProvider>
  )
}

export default App
