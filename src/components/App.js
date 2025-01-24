import React, { useState, useEffect } from 'react'

function App() {
    const [image, setImage] = useState("")
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(response => response.json())
            .then(data => {
                setImage(data.message) // data.message contains the image URL
                setIsLoading(false)
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoading(false); // Handle errors by stopping loading
            });
    }, [])

    return (
        <div>
            {!isLoading ? (
                <img src={image} key={image} alt="A Random Dog" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default App
