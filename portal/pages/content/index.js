import Card from "../../components/base/Card"
import ContentTable from "../../components/ContentTable"
import { server } from "../../config"
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import { useRouter } from "next/router";
function index({content}) {
    const router = useRouter()

    const tableKeys = ["node_title", "author_name", "updated_date","actions"]
    const rows = ["Title", "Author name", "Updated date","Actions"]
  return (
    <Card>
        <div className="mb-30">
          <Button onClick={()=>router.push('/content/add')} variant="contained" endIcon={<AddIcon />}>
            ADD Content
          </Button>
        </div>
        <div className="content-list-container">
        {content.length > 0 && <ContentTable data={content} rows={rows} tableKeys={tableKeys} />}
        </div>
    </Card>
  )
}

export async function getStaticProps(){
    const data = await (await fetch(`${server}/content`)).json()
    return {
        props :{
            content: data
        },
        revalidate: 10
    }
}

export default index