
// Nested destructuring
const person=

{
    name:"pratik",
    age:20,
    address:
    {
        street: "bb block b, indrustrial area",
        city: "sector 62,noida",
        state:"utter pradesh",
    },
    };
    function a()
    {
        const {
            name, 
            age,
            address:{
                street,city,state
            },
            
        }=person;
        return [name,street,city];
    }
    const result=a();
    console.log(result);