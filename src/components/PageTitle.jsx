const PageTitle = ({ title = "a page" }) => {
    // if(!title) title = 'a page'
    return (
        <>
            {/* {title ? <h1>Welcome to {title}</h1> : <h1>Welcome to a page</h1>} */}
            <h1>Welcome to {title}</h1>
        </>
    );
}
 
export default PageTitle;