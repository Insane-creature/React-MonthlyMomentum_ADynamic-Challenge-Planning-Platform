import Challenge from "./Challenge";

function ChallengeList({challenges}){
    return(
        <div>
            {challenges.map(challenge => (
                // <div key={challenge.id}>
                //     {challenge.month}
                // </div>
                <Challenge key={challenge.id} challenge={challenge}/>

            ))}
            
        </div>
    );
}

export default ChallengeList;