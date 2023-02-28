import { useEffect, useState } from "react"
import axios from "axios"
import { Link } from "react-router-dom";
import Button from "@mui/material/Button"
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';


export default function PostLists (){
    const [posts, setPosts] = useState ([])
    
    useEffect(()=>{
        axios.get("/posts",{
            withCredentials: true
        })
        .then(result => {
            console.log(result.data)
            setPosts(result.data)
        })
        .catch(err => err)
    },[])

    return(
        <div>
            <div className="post_wrapper">

                {
                    posts.map(post =>(
                        <section className="post_content" key={post._id} >
                            <div className="user-info">

                                <p>postBy: </p>
                                <hgroup>
                                    <h4><Link>{post.postBy.username}</Link></h4>
                                </hgroup>
                            </div>
                            <div className="post_info">

                                <p>post</p>
                                
                                <hgroup>
                                    <h4>{post.title}</h4>
                                </hgroup>
                                
                                <p>{post.text}</p>

                            </div>

                            <div className="answer_action">
                                <Button href={`/posts/${post._id}`} variant="contained" startIcon={<QuestionAnswerIcon/>} style={styles.btnM_l}>Answer</Button>
                                <Button href={`/posts/${post._id}`} variant="contained" endIcon={<QuestionAnswerIcon />}>See Answers</Button>
                            </div>
                        </section>
                    ))
                }
           </div>
        </div>
    )
}



// method:"get",
//             url: "/posts",
//             headers: {'X-Requested-With': 'XMLHttpRequest'},
//             withCredentials: true
//         }
// { posts.map(post => (
            

//     <section className="username" key={post._id}>
//         {/* {
//             isLoading && 
//             <ReactLoading type="" color="red" width={"100%"} height={10}/>} */}

//         <p>postedBy:</p> 
//         <hgroup>
//             <h4><Link>{post.postBy.username}</Link></h4>
//         </hgroup>

//         <p>Post:</p>
//         <hgroup><h2>{post.title}</h2></hgroup>
        
//         <p>{post.text}</p>

//         <div className="answer-action">

          
//         </div>
//     </section>
// ))
// }

const styles = {
    btnM_l : {
        margin: "1em"
    }
}
