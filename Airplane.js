// Write Pagination object that will get an array and pageSize, then will return the following.
//     prevPage
// nextPage
// firstPage
// lastPage
// goToPage
// getPageItems
//
// const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
// Pagination.init(alphabetArray, 4);
// Pagination.getPageItems(); // ["a", "b", "c", "d"]
// Pagination.nextPage(); // add the current page by one
// Pagination.getPageItems(); // ["e", "f", "g", "h"]
// Pagination.nextPage().nextPage(); // the ability to call chainable
// Pagination.goToPage(3); // current page must be set to 3

const pagination={
    init:(arr,p)=>{
        let strArr=[];
        if (p<arr.length){
            for(let i=0;i<p;i++){
                const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
            }
        }

    },
    prevPage:()=>{
    },

    nextPage:()=>{
    },

    firstPage:()=>{
    },

    lastPage:()=>{
    },

    goToPage:()=> {
    },

    getPageItems:()=>{
    },
};