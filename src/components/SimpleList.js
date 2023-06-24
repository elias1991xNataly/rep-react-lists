const numberList = [<li>1</li>, <li>2</li>, <li>3</li>, <li>4</li>];
const Stunders = ["Marc", "Lucy", "Anna"];



const SimpleList = () => {

    return (
        <div>

            <h2>Lista</h2>
            {numberList}
            {Stunders.map((name, index) => {
                return (<p key={index}> {name} </p>
                )
            })}
        </div>
    )
}

export default SimpleList;