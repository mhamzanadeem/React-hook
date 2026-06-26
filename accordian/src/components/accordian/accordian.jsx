export default function Accordian() {
    return (
        <div >
            <div>
                {data && data.length > 0 ? data : <div>No data found</div>}
            </div>
        </div>
    )
}