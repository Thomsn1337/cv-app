/* eslint-disable react/prop-types */

export default function YearPicker({ name, id, range = 50, startValue = "" }) {
    const currentYear = new Date().getFullYear();
    const startYear = currentYear - range;

    const years = [];
    for (let i = currentYear; i >= startYear; i--) {
        years.push(i);
    }

    return (
        <div className="year-picker">
            <label htmlFor={id}>{name}</label>
            <select name={id} id={id} defaultValue={startValue || currentYear}>
                {years.map((year, index) => (
                    <option key={index} value={year}>
                        {year}
                    </option>
                ))}
            </select>
        </div>
    );
}
