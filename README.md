# TypeScript-pizzaTime

## **Description**

**PizzaTime-** is an application where I tried to implement a lot of useful functionality, and make it user-friendly. I wrote the code as clearly as possible.

---

## **Functionality**

- **Filtering and searching**

  - You can sort products by category, by price and rating
  - You can find a certain pizza in the search
  - In the search component, you can delete the written text by clicking on the cross button

- **Interaction with products**

  - The ability to choose the size and type of dough.
  - You can add an item to the cart
  - You can click on the pizza picture for a detailed description of the pizza

- **Cart Component**
  - If it`s necessary, you can add or remove pizza by clicking on the - or + button
  - You can delete a certain pizza by clicking on the cross
  - You can completely empty the shopping cart by clicking on _Clear cart_
- **Navigation**

  - Clicking on the pizza icon at the top left will take you to the main page
  - Clicking on the cart icon at the top right will take you to the cart component
  - All components with navigation have 'Go back' buttons that will allow you to return to the main component

- **General**
  - The application is adapted to all screen resolutions
  - While the main component has not loaded the list of pizzas yet, the _Skeleton_ component is displayed
  - If you enter a non-existent pizza id in the address bar, you will be redirected to the main page
  - If the Сart component is empty, then another component will be rendered instead
  - Information about products is stored in localStorage

### **Details**

- To store a list of pizzas, I used the [mockAPI](https://mockapi.io/) service
- To optimize the work with the search component, I used the [Lodash.debounce](https://lodash.com/docs/4.17.15#debounce)
- I used the axios library to work with the server
- The Redux file is conveniently divided into files with selectors, types and slices.
- Business logic is located in Redux in a separate file `src/redux/pizza/asyncActions.ts`
- Re-rendering of the component is optimized using useCallback and React.memo
- Divided Build into separate chunks using React.Lazy
- I didn't use _Suspense_ on Route **Home** to speed up the initial loading of the app. `src/App.tsx`
- Since TypeScript didn't allow svg, png and scss imports, I had to declare them. `src/@types/assets.d.ts`
- To create a Pagination, I used the [react-paginate](https://www.npmjs.com/package/react-paginate) library
- The hook [useWhyDidYouUpdate](https://ahooks.js.org/hooks/use-why-did-you-update/) was used to search for component redraws

### **Tools**

![React](https://img.shields.io/badge/-React-090909?style=for-the-badge&logo=React&logoColor=61DBFB)
![Redux](https://img.shields.io/badge/-Redux-090909?style=for-the-badge&logo=Redux&logoColor=563d7c)
![SCSS](https://img.shields.io/badge/-SCSS-090909?style=for-the-badge&logo=SASS&logoColor=CD6799)
![Bootstrap](https://img.shields.io/badge/-Typescript-090909?style=for-the-badge&logo=Typescript&logoColor=007aac)

---

## **Deployment:** [Click here](https://pizza-time-sage.vercel.app/)
