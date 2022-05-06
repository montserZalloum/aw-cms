import React from "react";
import { server } from "../../../config/index.js";
import { useRouter } from "next/router";
import Card from "../../../components/base/Card";
import TermsList from "../../../components/term/list";

import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
function Home({ terms }) {
  
  const router = useRouter();
  const rows = ["name", "description", "created_at"];
  return (
    <Card>
      <div className="mb-30">
        <Button
          onClick={() => router.push(`/taxonomy/${router.query.term}/add`)}
          variant="contained"
          endIcon={<AddIcon />}
        >
          ADD TERM
        </Button>
      </div>
      {/* {terms && <TermsList data={terms} rows={rows} /> || <h1 className="center">No content</h1>} */}
      {<TermsList data={terms} rows={rows} /> || <h1 className="center">No content</h1>}
    </Card>
  );
}

export async function getStaticPaths() {
  const response = await fetch(`${server}/taxonomy`);
  const data = await response.json();
  const paths = data.map(taxonomy => {
    return {
        params: {
            taxonomyId: taxonomy._id,
            term: taxonomy.name
        }
    }
  });
  return {
    paths,
    fallback: true,
  };
}

export async function getStaticProps(context) {
  const response = await fetch(`${server}/taxonomy/${context.params.term}/term`);
  const data = await response.json();
  return {
    props: {
      terms: data,
    },
    revalidate: 60,
  };
}

export default Home;
