import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "../../services/api";
import "./Post.css";

const Post = () => {
    const [post, setPost] = useState([]);
    const { id } = useParams();
    console.log(post);
    useEffect(() => {
        async function findByIdPost() {
            const response = await api.get("", {
                params: {
                    api: "posts",
                },
            });
            console.log(response.data);
            const postId = response.data.find((post) => post.id === Number(id));
            setPost(postId);
        }

        findByIdPost();
    }, []);

    return (
        <>
            {post && (
                <div>
                    <h1>{post.titulo}</h1>
                </div>
            )}
        </>
    );
};

export default Post;
