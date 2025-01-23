import {useState} from 'react'
import resources from '../resources/en.json';
import './Order.css';
function Order(){
    const categories=[
        {
            name:"Traditional Coffee"
        },
        {
            name:"Italian Coffee"
        },
        {
            name:"Tea"
        },
        {
            name:"Juice"
        },
        {
            name:"Smoothie"
        },
        {
            name:"Other Drinks"
        },
        {
            name:"Ice Cream"
        },
        {
            name:"Ice Blended"
        }
    ];
    const items =[
        {
            category:"Traditional Coffee",
            name:"Traditional Black Coffee",
            price: 35000
        },
        {
            category:"Traditional Coffee",
            name:"Espresso Black Coffee",
            price: 35000
        },
        {
            category:"Traditional Coffee",
            name:"Traditional Milk Coffee",
            price: 40000
        },
        {
            category:"Traditional Coffee",
            name:"Espresso Milk Coffee",
            price: 40000
        },
        {
            category:"Traditional Coffee",
            name:"Condensed Milk Coffee",
            price: 45000
        },
        {
            category:"Traditional Coffee",
            name:"Coconut Coffee",
            price: 50000
        },
        {
            category:"Traditional Coffee",
            name:"AHA Ice Cream Coffee",
            price: 70000
        },
        {
            category:"Italian Coffee",
            name:"Espresso",
            price: 35000
        },
        {
            category:"Italian Coffee",
            name:"Americano",
            price: 40000
        },
        {
            category:"Italian Coffee",
            name:"Cappuchino",
            price: 50000
        },
        {
            category:"Italian Coffee",
            name:"Latte",
            price: 50000
        },
        {
            category:"Italian Coffee",
            name:"Mocha",
            price: 55000
        },
        {
            category:"Tea",
            name:"Black Tea",
            price: 35000
        },
        {
            category:"Tea",
            name:"Jasmine Tea With Tropical Fruits",
            price: 40000
        },
        {
            category:"Tea",
            name:"Black Tea With Fresh Milk",
            price: 50000
        },
        {
            category:"Tea",
            name:"Jasmine Tea With Lychee",
            price: 50000
        },
        {
            category:"Tea",
            name:"Oolong Milk Tea",
            price: 50000
        },
        {
            category:"Juice",
            name:"Lemon Juice",
            price: 50000
        },
        {
            category:"Juice",
            name:"Passion Fruit Juice",
            price: 45000
        },
        {
            category:"Juice",
            name:"Watermelon Juice",
            price: 50000
        },
        {
            category:"Smoothie",
            name:"Mango Smoothie",
            price: 50000
        },
        {
            category:"Smoothie",
            name:"Coconut Smoothie",
            price: 60000
        },
        {
            category:"Smoothie",
            name:"Snowy Lemon",
            price: 60000
        },
        {
            category:"Ice Blended",
            name:"Ice Blended Matcha",
            price: 60000
        },
        {
            category:"Ice Blended",
            name:"Chocolate & Mint",
            price: 55000
        },
        {
            category:"Ice Blended",
            name:"Cookie Choco",
            price: 55000
        },
        {
            category:"Ice Cream",
            name:"Strawberry Ice Cream",
            price: 60000
        },
        {
            category:"Ice Cream",
            name:"Raspberry Ice Cream",
            price: 60000
        },
        {
            category:"Ice Cream",
            name:"Vanilla Ice Cream",
            price: 30000
        },
        {
            category:"Other Drinks",
            name:"Iced Yogurt",
            price: 30000
        },
        {
            category:"Other Drinks",
            name:"Beer",
            price: 40000
        },
    ]

    
    const [searchInput, setSearchInput] = useState('');
    const handleSearchChange = (e) =>{
        setSearchInput(e.target.value);
    }

    // search bar function
    const searchFilter = (input, item) => {
        return item.name.toLowerCase().includes(input.toLowerCase());
    };

    // try to sort the items in categorical order
    const itemFilter = (categories, items, searchInput) => {
        const groupedItems = {};
        categories.forEach(category => {
            groupedItems[category.name] = items.filter(item => item.category === category.name && searchFilter(searchInput, item));
        });
        return groupedItems;
    };

    const groupedItems =itemFilter(categories, items, searchInput);

    //function is used to add a comma for each price => better readability 
    function formatPrice(price) {
        // Convert the number to a string
        return price.toString()
            // Use a regular expression to add commas
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //add and subtract quantity of an item
    // const [number, setNumber] =useState(0);
    // const add=()=>{
    //     setNumber(num => num+1);
    // }

    // const subtract=()=>{
    //     if (number <= 0) return number;
    //     setNumber(num => num -1);
    // }
    const [quantities, setQuantities]=useState({})
    const add =(itemName)=>{
        if(!quantities[itemName])  {
            setQuantities(prevQuantities => ({
                ...prevQuantities, 
                [itemName]: 1
            }))//why do we one more layer of curly braces here
        }else{
            setQuantities(
                prevQuantities => ({
                    ...prevQuantities,
                    [itemName]: quantities[itemName] + 1
                })
            )
        }
    }
    const subtract =(itemName)=>{
        if(!quantities[itemName] || quantities[itemName] === 0)  {
            setQuantities(prevQuantities => ({
                ...prevQuantities, 
                [itemName]: 0
            }))//why do we one more layer of curly braces here
        } else{
            setQuantities(
                prevQuantities => ({
                    ...prevQuantities,
                    [itemName]: quantities[itemName] -1
                })
            )
        }
    }
    // Order board
    // const [orderList, setOrderList] = useState({});

    // const addOrder=(orderItem)=>{
    //     return(
    //         setOrderList(prevOrderItem =>({
    //             ...prevOrderItem,

    //         }))
    //     )
    // }
    const [orderList, setOrderList]=useState({})



    const addToOrder=(itemName, quantities)=>{
        if(!orderList[itemName]) {
            setOrderList(prevOrderList => ({
                ...prevOrderList,
                [itemName]: quantities[itemName]
            }));
            setQuantities(prevQuantities => (
                {
                    ...prevQuantities,
                    [itemName]: 0
                }
            ));
        }else{
            setOrderList(prevOrderList => ({
                ...prevOrderList,
                [itemName]: (prevOrderList[itemName] + quantities[itemName])
            }));
            setQuantities(prevQuantities => (
                {
                    ...prevQuantities,
                    [itemName]: 0
                }
            ));
        }
    }

    const removeOrder=(itemName)=>{
        setOrderList(prevOrderList =>{
           const {[itemName]:_, ...rest} = prevOrderList;
           return rest;
        })
    }
    
    return(
        <div>
            <div className="orderBg grid grid-cols-18">
                <section className='col-span-6 categoryBoard'>
                    <div className='title text-2xl m-4'>Category</div>
                    <div className='ml-4 mb-4 mr-4'>
                    {categories.map(
                        x=>
                            <div className='text-xl'>
                                {x.name}
                            </div>
                        )}
                    </div>
                    
                </section>
                <section className='col-span-6 itemBoard'>
                    <input type="text" id="itemSearch" placeholder='Search...' title="Type in an item" className="text-xl searchBar mt-4 mb-2 p-2 border-2 border-slate-200 rounded w-full" onChange={handleSearchChange}></input>
                    <div>
                        {
                        Object.keys(groupedItems).map(category => 
                            <div>
                                <h1 key={category} className='categoryItemTitle text-2xl font-medium text-center'>{category}</h1>
                                <ul>
                                    {groupedItems[category].map(item => 
                                        <li key={item.name} className='itemBox grid grid-cols-12'>
                                            <div className='content-center col-span-8 text-lg'>
                                                <div className='ml-2'>{item.name}</div>
                                                <div className='ml-2'>{formatPrice(item.price)}</div>
                                            </div>
                                            <div className='buttonArea col-span-3'>
                                                <button className='quantity-button menuPageButton w-8 h-8 text-white text-lg' onClick={()=>add(item.name)}>+</button>
                                                <div className='m-4 text-lg'>{quantities[item.name]||0}</div>
                                                <button className='quantity-button menuPageButton w-8 h-8 text-white text-lg' onClick={()=>subtract(item.name)}>-</button>
                                            </div>
                                            <div className='text-center content-center justify-items-center col-span-1'><button className='menuPageButton addButton' onClick={() => addToOrder(item.name, quantities)}>Add</button></div>
                                        </li>)
                                    }
                                </ul>
                            </div>
                        )
                        }
                    </div>
                </section>
                <section className='col-span-6 categoryBoard orderBoard'>
                    <h1 className='title text-2xl m-4'>Order</h1>
                    <div className='orderList'>
                        <ul className=''>
                            {Object.keys(orderList).map(
                                item => orderList[item] > 0 &&
                                    <li key={item} className='flex ml-1 mb-2 mr-1 items-baseline grid grid-cols-12 justify-around'>
                                        <span className='col-span-7'>{item}</span>
                                        <span className='col-span-1'> - </span>
                                        <span className='col-span-1'>{orderList[item]}</span>
                                        <span className='col-span-3 justify-end'>
                                            <button className='removeButton' onClick={()=>removeOrder(item)}>Remove</button>
                                        </span>
                                    </li>
                            )}
                        </ul>
                    </div>
                    <div className='flex text-center justify-center m-4'>
                        <button className='orderButton'>Order</button>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Order;