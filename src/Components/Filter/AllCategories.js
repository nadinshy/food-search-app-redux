import Filter from "./Filter";

const AllCategories = () => {
    return (<div>
        <h1>What kind of foof do you like?</h1>
        {/* map */}
        {['SEAFOOD', 'ITALIAN', 'APPETIZERS', 'SALADS', 'ALL']
        .map(category => <Filter key={category} category = {category}/>)}
    </div>

    )

}

export default AllCategories;