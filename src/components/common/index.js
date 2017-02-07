export * from './Button'
//so in a single line we both import and export 

export * from './Card'
export * from './Header'
export * from './CardSection'
export * from './Input'
export * from './Spinner'
export * from './Confirm'

//above is a pass through , it is saying take everything from the button file ,
//and export it from this file , the index.js file

//the downside of this is that we can't use the the default keyword inside
//each of these files
//we have to export an object 


//now we can put all of our common components inside of one directory and then have just
//ONE single import statement

