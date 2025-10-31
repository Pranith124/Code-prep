
export function PosterBar() {
    let img1_url="https://assets.leetcode.com/users/images/942e9e91-7f81-4513-8544-c462980a5d3a_1738741032.3553998.png";
    let img2_url="https://assets.leetcode.com/users/images/b0a08a5c-c575-48f6-9110-b6ae4e011e98_1655746322.579097.png";
    let img3_url="https://assets.leetcode.com/users/images/770789b0-c96b-4663-86d1-baab25534864_1669795265.8012726.png";
    let img4_url="https://assets.leetcode.com/users/images/49479bba-73b3-45d2-9272-99e773d784b2_1687290663.3168745.jpeg";
    return(
        <div className="flex justify-center ">
            <a href="#" className="pl-10 pt-3 max-w-[270px]"><img src={img1_url} alt="learning-module1" /></a>
            <a href="#" className="pl-10 pt-3 max-w-[270px]"><img src={img2_url} alt="learning-nodule2" /></a>
            <a href="#" className="pl-10 pt-3 max-w-[270px]"><img src={img3_url} alt="learning-module3" /></a>
            <a href="#" className="pl-10 pt-3 max-w-[270px]"><img src={img4_url} alt="learning-module4" /></a>
        </div>
    )
}