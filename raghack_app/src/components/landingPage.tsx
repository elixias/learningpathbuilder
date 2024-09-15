import {
    Textarea, Button, Label, makeStyles, tokens, Display
} from '@fluentui/react-components';
import { useState } from 'react';
import { defaultJobDescription, defaultResume } from '../requests/dummyData';

const useStyles = makeStyles({
    base: {
        display: "flex",
        flexDirection: "column",
        "& > label": {
            marginBottom: tokens.spacingVerticalMNudge,
        },
    },
});

function LandingPage({ handlePlanCareerClick }: any) {
    const styles = useStyles();
    const [formstate, setFormstate] = useState({
        jobDescription: defaultJobDescription,
        resume: defaultResume,
    });

    const handleJobDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormstate(prevState => ({
            ...prevState,
            jobDescription: event.target.value
        }));
    };

    const handleResumeChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormstate(prevState => ({
            ...prevState,
            resume: event.target.value
        }));
    };

    return (
        <div>

            <div className="styled-div" style={{ marginTop: "40px" }}>
                <Display className="gradient-text">
                    Customised Learning Path
                </Display>
            </div>

            <div className="styled-div">
                <div style={{ fontWeight: 400, fontSize: "20px", lineHeight: "28px" }}>
                    Our app helps you build a personalized learning path for certifications based on your resume and job description. Simply upload your resume and the job description you're targeting, and our app will analyze your skills and gaps. It then recommends relevant certifications to enhance your qualifications and guide your career advancement.
                </div>
            </div>

            <div className={styles.base} style={{ marginBottom: "24px" }}>
                <Label htmlFor="texarea-resume" style={{ textAlign: 'left' }}>Resume</Label>
                <Textarea
                    id="texarea-resume"
                    value={formstate.resume}
                    onChange={handleResumeChange}
                    rows={4}
                ></Textarea>
            </div>

            <div className={styles.base} style={{ marginBottom: "24px" }}>
                <Label htmlFor="texarea-job-desc" style={{ textAlign: 'left' }}>Job description</Label>
                <Textarea
                    id="texarea-job-desc"
                    value={formstate.jobDescription}
                    onChange={handleJobDescriptionChange}
                    rows={4}
                ></Textarea>
            </div>

            <div className="styled-div">
                <Button onClick={() => {
                    handlePlanCareerClick(formstate)
                }}>
                    Plan Learning Path
                </Button>
            </div>
        </div>
    )
}

export default LandingPage