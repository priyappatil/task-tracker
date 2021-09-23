console.log('Welcome to ES6 Higher Order Array Methods....');

const companies = [
    {name : 'Compant One', category : 'Finance', start : 1981, end : 2003 }, 
    {name : 'Compant Two', category : 'Retail', start : 1992, end : 2008 }, 
    {name : 'Compant Three', category : 'Auto', start : 1999, end : 2007 },
    {name : 'Compant Four', category : 'Retail', start : 1989, end : 2010 },
    {name : 'Compant Five', category : 'Technology', start : 2009, end : 2014 },
    {name : 'Compant Six', category : 'Finance', start : 1987, end : 2010 },
    {name : 'Compant Seven', category : 'Auto', start : 1986, end : 1996 },
    {name : 'Compant Eight', category : 'Technology', start : 2001, end : 2016 },
    {name : 'Compant Nine', category : 'Retail', start : 1981, end : 1989 }    
]

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32]

const sumAges = [33 + 12 + 20 + 16 + 5 + 54 + 21 + 44 + 61 + 13 + 15 + 45 + 25 + 64 + 32]
console.log(sumAges);

const alphabets = ['Z', 'U', 'A', 'C', 'B', 'N', 'M', 'K']

// using simple loop :-
// for(let i=0; i < companies.length; i++) {
//     console.log(companies[i].name);
// }

// 1. forEach() :- It doesn't return any array, it just alter the array.
// arrayName.method( function(parameter) { functionBody } )
// arrayName.method( (parameter) => { functionBody } )

// companies.forEach(function(company) {
//     console.log(company.name);
// })

// const index = 0
// companies.forEach( (company) => {
//     console.log(company.category);
//     // console.log(index);
// })

// let canDrink = []
// for(let i=0; i < ages.length; i++) {
//     if(ages[i] >= 18) {
//         canDrink.push(ages[i])
//     }
// }

// console.log(canDrink);

// 2. filter() :- It returns an array. It is used when u have to filter an array based on some condition i.e true/false.
// const canDrink = ages.filter(function(age) {
//     // condition
//     if(age >= 18) {
//         return true;
//     }
// })
// console.log(canDrink);

// If u r passing only one parameter then no need to specify the brackets
// const canDrink = ages.filter(age => age >= 18)
// console.log(canDrink);

// const retailCompany = companies.filter( company => company.category === 'Retail' )
// console.log(retailCompany);

// const nameOfRetailCompany = companies.filter(company => company.category === 'Retail').forEach(company.name)
// console.log(nameOfRetailCompany);

// const eightiesCompanies = companies.filter(company => company.start >= 1980 && company.start < 1990)
// console.log(eightiesCompanies);

// const nintiesCompanies = companies.filter(company => company.start >= 1990 && company.start < 2000)
// console.log(nintiesCompanies);

// 3. maps() :- returns you with an array
// print --> CompanyOne [start-end]

// const companyMap = companies.map(company => {return `${company.name} [${company.start} - ${company.end}]`})
// console.log(companyMap);

// const retailCompanyName = companies.filter(company => company.category === 'Retail').map(company.name)
// console.log(retailCompanyName);

// It is returning an empty array 
// const retailCompanyName = companies.map(company => company.name).filter(company => company.category === 'Retail')
// console.log(retailCompanyName);

// const combineValues = ages.map(age => age * 1).filter(age => age >= 20)
// console.log(combineValues);

// why this map with companies array returns an ampty array because map have only company name not category on the other hand filter have category
// const a = companies.filter(c => c.category === 'Retail')
// console.log(a)

// const b = companies.map(c => c.name)
// console.log(b);

// const d = companies.filter(c => c.category === 'Retail').map(c => c.name)
// console.log(d);

// 4. sort() :- It returns an array
// const sortedCompanies = companies.sort((a,b) => (a.start > b.start) ? 1 : -1)
// console.log(sortedCompanies);

// const sortedAges = ages.sort((a,b) => a - b)       // + dores't work here
// console.log(sortedAges);

// for decreasing order
// const arr = ages.sort((a,b) => (a < b) ? 1 : -1)     // > for ascending order
// console.log(arr);

// const sortedAlphabets = alphabets.sort((a,b) => (a > b) ? 1 : -1)      // < for decreasing order
// console.log(sortedAlphabets); 

// 5. reduce() :- It only returns a sigle value (any value like number, boolean, string, etc.) --> generally used with numbers
// const sumOfAges = ages.reduce((total, age) => {
//     return total + age
// })                           // you can also return a 0 here like-->  "}, 0)"
// console.log(sumOfAges);

// find the total years of each company
// const totalYears = companies.reduce((total, company) => total + (company.end - company.start))
// console.log(totalYears);       // It will return an object because everything in a JavaScript is an object.

// const totalYears1 = companies.reduce((total, company) => total + (company.end - company.start), 0)
// console.log(totalYears1);        // 128

// Combine Methods
const ageOfEachCompany = companies.map( company => (company.end - company.start)).reduce( (a, b) => a+b, 0)
console.log(ageOfEachCompany);

const combine = ages.map(age => age*1).filter(age => age >= 21).sort((a, b) => a-b).reduce((a, b) => a+b, 0)
console.log(combine);
