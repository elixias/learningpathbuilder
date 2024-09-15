import { Body1, Body1Stronger, Card, Tag, Title3, Subtitle2Stronger } from '@fluentui/react-components'

function MatchedSkills({ skills }: any) {
    return (
        <div className="styled-div-md">
            <Card style={{ marginBottom: "48px", padding: "20px" }}>
                <Title3>{skills.score}% of your skills match the job requirements</Title3>
                <Body1Stronger>Matched Skills:</Body1Stronger>
                {skills.matchedSkills.map((skills: string, key: number) => <Tag key={key}>{skills}</Tag>)}

                <Subtitle2Stronger>Missing Skills:</Subtitle2Stronger>
                <Body1>{skills.missingSkills.map((skills: string, key: number) => <Tag key={key} style={{ marginRight: "8px" }}>{skills}</Tag>)}</Body1>
            </Card>
        </div>
    )
}

export default MatchedSkills