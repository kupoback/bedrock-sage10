import { useSelector} from "react-redux";
import Post from "../Post";

const Posts = ({posts}) => {
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
