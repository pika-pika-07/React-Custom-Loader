# Custom-Loader
This is a custom react loader component


## Tech Stack
- Reactjs as Frontend Library

## How to Setup 
- Clone the repo
- Open the repo inside your editor
- Go inside the project folder and run npm install
- Run npm run start to start the Parcel server on localhost://3000
- Vist http://localhost:3000/ to see the app

## How it works
- The home page shows 2 buttons which upon clicking show 2 different configurations of the react loader
- The configurations is derived from the props you have passed

## How to use the component
```
 <Skeleton
  count={3}
  />
```
- This is a very basic skeleton. This will create 3 bars vertically and animate them
- We can wrap this in a container to customize according to the requriments
- We can build a fully customizable loader combining multiple skeleton components
- This way we can have individual Skeletons for a larger loading component 
- Below is the sample I have created which has 2 different types of loaders
```
 {Array.from({ length: 14 }).map((el) => (
        <div className="product-container">
          {loaderType == 1 ? (
            <Skeleton
              count={3.5}
              styles={[
                { width: "80%", height: "16rem", alignSelf: "flex-start" },
              ]}
            />
          ) : (
            <>
              <Skeleton
                circle
                baseColor="yellow"
                loadingColor="red"
                styles={[
                  { width: "80%", height: "6rem", alignSelf: "flex-start" },
                ]}
              />
              <Skeleton count={6} baseColor="yellow" loadingColor="red" />
            </>
          )}
        </div>
      ))}
```
- Skeleton component takes 2 props
  - count : A number indicating No fo bars to render(3.5 indicates 2 bars with full width and last bar with 50% of the width)
  - styles : An array of object( with syling properties) to override the array of bars(1:1 ratio). If only one object is present, it will only style the first bar and so so
  - circle: if circle is provided the bar will be a circle with border-radius of 50%.
  - baseColor: If you want to change the default base color of the bar
  - loadingColor: If you want to change the default loading color of the bar


## App Hosted on Netlify(https://my-react-custom-loader.netlify.app/)
- App is hosted on netlify (https://my-react-custom-loader.netlify.app/)
- Feel free to check it out

