import { v4 as uuidv4 } from 'uuid';
import TreeView from '@mui/lab/TreeView';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronDownIcon from '@mui/icons-material/ChevronRight';
import TreeItem from '@mui/lab/TreeItem';
import AppNavigationOffCanvasDropdownItem from './AppNavigationOffCanvasDropdownItem';

export default function AppNavigationOffCanvasDropdown({ title, navItems }) {
  return (
    <span className="dropdown">
      <TreeView
        aria-label={`${title} dropdown menu`}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronDownIcon />}
      >
        <TreeItem nodeId="1" label={title}>
          {navItems.map((navItem) => (
            <AppNavigationOffCanvasDropdownItem
              key={uuidv4()}
              linkText={navItem.linkText}
              linkRoute={navItem.linkRoute}
            />
          ))}
        </TreeItem>
      </TreeView>
    </span>
  );
}
