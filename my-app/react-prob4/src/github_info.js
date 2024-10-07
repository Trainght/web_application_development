function Followers({numOfFollower , name,url}) {
    if (numOfFollower > 10000) {
        // return <a href={url} target="_blank" > {name}  {"("}  {numOfFollower} {"followers)"} </a>
        return <a href={url} target="_blank" >{`${name} (${numOfFollower} followers)`}</a>

    } else {
        return <a href={url} target="_blank" > {name} </a>
    }
}

export function GitHubInfo({UserInfo,size=200}){
    return <>
    <li>
        <img 
            src={UserInfo.imgURL}
            width={size}
            />
    
        <Followers name = {UserInfo.alt} numOfFollower = {UserInfo.followers} url={UserInfo.url} />

    </li>
    </>
}