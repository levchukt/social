
import s from './Users.module.css';

const Paginator = ({currentPage, totalUsersCount, pageSize, setCurrentPage}) => {
    const pagesCount = Math.ceil(totalUsersCount / pageSize);
    let pages = [];

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let curP = currentPage;
    let curPF = ((curP - 5) < 0) ? 0 : curP - 5;
    let curPL = curP + 5;
    let slicedPages = pages.slice(curPF, curPL);
    return (
        <div className={s.usersPages}>
            {slicedPages.map((page) => {
                return <span key={page} onClick={() => {setCurrentPage(page) }} className={currentPage === page ? s.selectedPage : s.pageNumber}>{page}</span>
            })}
        </div>
    )
}

export default Paginator;