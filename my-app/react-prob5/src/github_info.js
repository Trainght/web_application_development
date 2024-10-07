
export function GitHubInfo({UserInfo,size=200}, Name){
    return <>
        <img 
            src={UserInfo.imgURL}
            width={size}
            />
        {/* <a href={UserInfo.url} target="_blank" >{`${UserInfo.alt} (${UserInfo.followers} followers)`}</a> */}
        <a href={UserInfo.url} target="_blank" >{UserInfo.alt}</a> <a>{`(${UserInfo.followers} followers)`}</a>

    </>
}