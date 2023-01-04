function App() {
    const title='Blog post';
    const body= 'This is my blog post';
    const comments=[
        {id:0,text:'comment one'},
        {id:1,text:'comment two'},
        {id:2,text:'comment three'}
    ]
    return (
        <div className="container">
<h1>{title.toUpperCase()}</h1>
<p>{body}</p>

        </div>
        
    )
}
export default App