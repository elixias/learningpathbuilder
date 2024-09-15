import { Title1, Title2, Title3, Subtitle2Stronger } from '@fluentui/react-components';
import MatchedSkills from './matchedSkills';
import { IosArrow24Regular } from "@fluentui/react-icons";

interface ICert {
    KEY: number,
    name: string,
    difficulty: string,
    reason: string,
    cert: string,
    skills_measured: string
}

function ResultsDisplay({ learningPath, handleBackClick }: any) {

    const handleClick = () => handleBackClick()

    const findCert = (k: number): ICert | undefined => {
        let c = learningPath.certificationsContext.find((cert: ICert) => {
            return cert.KEY === k
        });
        return c
    };

    function capitalizeFirstLetterOfEveryWord(str: string) {
        return str
            .split(' ') // Split the string into an array of words
            .map(word =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() // Capitalize the first letter and make the rest lowercase
            )
            .join(' '); // Join the array of words back into a single string
    }

    if (!learningPath) return <></>
    return (
        <div style={{ marginTop: "40px" }}>

            <div className="styled-div-md">
                <div onClick={handleClick} style={{ cursor: "pointer", display: "flex", alignItems: "center", }}>
                    <IosArrow24Regular style={{ fontSize: "32px" }} />
                    <p style={{ margin: "0 0 0 8px" }}>Back</p>
                </div>
            </div>

            {/* Soft Skills Card */}
            <div className="styled-div-md">
                <Title1 className="gradient-text">Soft Skills</Title1>
            </div>

            <p>This section highlights the soft skills you currently possess and identifies any that are required for the job but missing from your skill set. It provides a clear view of how well your interpersonal and problem-solving abilities align with job expectations.</p>

            <MatchedSkills skills={learningPath.softSkillsResults}></MatchedSkills>

            {/* Tech Skills Card */}
            <div className="styled-div-md">
                <Title1 className="gradient-text">Tech Skills</Title1>
            </div>

            <p>Here, you'll find an overview of your existing technical skills alongside those you need to develop to meet the job requirements. This section helps you understand which technical competencies are already covered and which ones require further enhancement.</p>

            <MatchedSkills skills={learningPath.techSkillsResults}></MatchedSkills>

            {/* Learning Path */}
            <div className="styled-div-md">
                <Title1 className="gradient-text">Certifications Path</Title1>
            </div>

            <p>Our customized learning path offers tailored Microsoft certifications based on your skill gaps. It guides you through relevant certifications to build the expertise needed for your career goals and job requirements.</p>
            {
                learningPath.certificationsPath.map((certpath: { key: number, reason: string }, key: number) => {
                    const cert = findCert(certpath.key);

                    return (
                        <div className="styled-div">

                            {cert ? (
                                <div className="card-block" key={key} style={{ marginBottom: "24px" }}>
                                    <Title3>{capitalizeFirstLetterOfEveryWord(cert.cert.split("-").join(" "))}</Title3>
                                    <p style={{ marginBottom: "20px" }}>{certpath.reason}</p>
                                    <Subtitle2Stronger>Skills covered:</Subtitle2Stronger>
                                    <ul>{cert.skills_measured.split(', ').map(skill => <li>{skill}</li>)}</ul>
                                </div>
                            ) : (
                                <Title2>Certification Not Found</Title2>
                            )}

                        </div>

                    );
                })
            }

        </div >
    )
}

export default ResultsDisplay