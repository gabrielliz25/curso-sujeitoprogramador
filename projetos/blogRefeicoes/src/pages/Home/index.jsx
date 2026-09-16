import { useState, useEffect } from "react"
import { Link } from "react-router"
import api from "../../services/api"
import "./Home.css"

const Home = () => {
    const [posts, setPosts] = useState([])
    console.log(posts)

    useEffect(() => {
        async function loadPosts() {
            const response = await api.get("", {
                params: {
                    api: "posts"
                }
            })
            setPosts(response.data)
        }

        loadPosts()
    }, [])

    return <>
        <div className="home-container">
            {posts && posts.map(post => (
                <div className="home-card">
                    <h2>{post.titulo}</h2>
                    <img src={post.capa} alt="" />
                    <Link className="home-button" to={`/post/${post.id}`}>Ver Detalhes</Link>
                </div>
            ))}
        </div>
    </>
}

export default Home