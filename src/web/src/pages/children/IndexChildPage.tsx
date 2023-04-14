import Toolbar, { ToolbarProps } from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import { ChildrenTable } from "../../features/children/ChildrenTable";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";

const StyledToolbar = styled(Toolbar)<ToolbarProps>(({ theme }) => ({
  marginLeft: "auto",
  marginRight: -12,
}));

export const IndexChildPage = () => {
  const navigate = useNavigate();
  const onAddChildClickHandler = () => navigate("/children/new");

  return (
    <>
      <Container>
        <StyledToolbar>
          <Button variant="contained" onClick={onAddChildClickHandler} startIcon={<AddIcon />}>
            Kind
          </Button>
        </StyledToolbar>
        <Paper>
          <ChildrenTable />
        </Paper>
      </Container>
    </>
  );
};
