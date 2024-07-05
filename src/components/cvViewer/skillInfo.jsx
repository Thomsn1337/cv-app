/* eslint-disable react/prop-types */
import "../../styles/skillInfo.css"

export default function SkillInfo({ name, rating }) {
    const ratingBlocks = new Array(5).fill(false);
    for (let i = 0; i < rating; i++) {
        ratingBlocks[i] = true;
    }

    return (
        <>
            <p>{name}</p>
            <div className="rating-bar">
                {ratingBlocks.map((block) => {
                    return block ? (
                        <div className="rating-block set"></div>
                    ) : (
                        <div className="rating-block"></div>
                    );
                })}
            </div>
        </>
    );
}
