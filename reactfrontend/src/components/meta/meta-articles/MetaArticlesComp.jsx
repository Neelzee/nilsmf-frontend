import "./MetaArticles.css"


export function RenderArticleEdit(article, authors) {

    let author = {
        first_name: "Unknown",
        last_name: "",
    };


    author = authors.find(a => a.author_id === article.author_id);

    return (
      <div key={article.article_id} className={`meta-article ${article.is_published ? "published" : "not-published"}`}>
        <h1 className="meta-title">{article.title}</h1>
        <div className="datetime">
            <div>Published: {article.published_date}</div>
            <div>Time: {article.published_time}</div>
            <div>By: {author.first_name} {author.last_name}</div>
        </div>
        <div className="edit-btns">
            <button className="edit-btn">
                Edit
            </button>
            <button className="delete-btn">
                Delete
            </button>
        </div>
      </div>
    );
}
