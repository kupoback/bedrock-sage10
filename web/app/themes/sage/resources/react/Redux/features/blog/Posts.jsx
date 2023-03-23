import { useSelector, useDispatch } from "react-redux";
import {getPosts} from "./postsSlice";

import Post from "../../../Pages/Blog/BlogListing/Components/Post";

const Posts = () => {
	const posts = useSelector((state) => state.posts.posts);
	const dispatch = useDispatch();
	
	return (
		<>
			{posts.map(post =>
				<Post key={post.id}
				      post={post}
				      firstItem={post.id === posts[0]?.id}
				      lastItem={post.id === posts.findLast(x => true)?.id}/>)}
		</>
	)
}

export default Posts;
