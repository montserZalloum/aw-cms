import React from "react";
import {server} from '../../config/index.js'
import { useRouter } from "next/router";
import Card from "../../components/base/Card";
import BasicTable from "../../components/base/Table";


import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
function Home({taxonomies}) {
  const router = useRouter();
  const rows = ["name", "description", "created_at"];
  return (
      <Card>
        <div className="mb-30">
          <Button onClick={()=>router.push('/taxonomy/add')} variant="contained" endIcon={<AddIcon />}>
            ADD TAXONOMY
          </Button>
        </div>
        {taxonomies && <BasicTable data={taxonomies} rows={rows} />}
      </Card>
  );
}

export async function getStaticProps(context) {
  const response = await fetch(`${server}/taxonomy`);
  const data = await response.json();
  return {
    props: {
      taxonomies: data
    },
    revalidate: 60
  };

}

export default Home;
