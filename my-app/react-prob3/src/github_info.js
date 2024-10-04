export function GitHubInfo({UserInfo,size=50}){
    return <>
    <h2>{UserInfo.alt}</h2>
    <img 
          src={UserInfo.imgURL}
          width={size}
          height={size}
          />
    <h2><a href={UserInfo.url}>GitHub reposity</a></h2>  
    </>
}