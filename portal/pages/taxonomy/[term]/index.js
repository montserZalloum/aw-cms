import React from "react";
import { server } from "../../../config/index.js";
import { useRouter } from "next/router";
import Card from "../../../components/base/Card";
import BasicTable from "../../../components/base/Table";

import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
function Home({ terms }) {
  const router = useRouter();
  const rows = ["name", "description", "created_at"];
  return (
    <Card>
      <div className="mb-30">
        <Button
          onClick={() => router.push("/taxonomy/add")}
          variant="contained"
          endIcon={<AddIcon />}
        >
          ADD TAXONOMY
        </Button>
      </div>
      {terms && <BasicTable data={terms} rows={rows} />}
    </Card>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${server}/taxonomy`);
  const data = await response.json();
  const paths = data.map(taxonomy => {
    return {
        params: {
            term: taxonomy.name,
            taxonomyId: taxonomy._id
        }
    }
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const response = await fetch(`${server}/taxonomy/${context.params.taxonomyId}`);
  const data = await response.json();
  return {
    props: {
      taxonomies: data,
    },
    revalidate: 60,
  };
}

export default Home;
