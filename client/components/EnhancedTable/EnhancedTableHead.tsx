import Checkbox from 'material-ui/Checkbox';
import {
    TableCell,
    TableHead,
    TableRow,
    TableSortLabel,
} from 'material-ui/Table';
import Tooltip from 'material-ui/Tooltip';
import * as React from 'react';

const columnData = [
    {
        id: 'name',
        numeric: false,
        disablePadding: true,
        label: 'Dessert (100g serving)',
    },
    { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
    {
        id: 'timesEaten',
        numeric: true,
        disablePadding: false,
        label: '# times eaten',
    },
    { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
    { id: 'carbs', numeric: true, disablePadding: false, label: 'Carbs (g)' },
    {
        id: 'protein',
        numeric: true,
        disablePadding: false,
        label: 'Protein (g)',
    },
];

export interface EnhancedTableHeadProps {
    onRequestSort(event, property): any;
    onSelectAllClick: (event, checked) => void;
    order: any;
    orderBy: string;
    numSelected: number;
    rowCount: number;
}

class EnhancedTableHead extends React.Component<EnhancedTableHeadProps, {}> {
    createSortHandler = property => event => {
        this.props.onRequestSort(event, property);
    };

    render() {
        const {
            onSelectAllClick,
            order,
            orderBy,
            numSelected,
            rowCount,
        } = this.props;

        return (
            <TableHead>
                <TableRow>
                    <TableCell padding="checkbox">
                        <Checkbox
                            indeterminate={
                                numSelected > 0 && numSelected < rowCount
                            }
                            checked={numSelected === rowCount}
                            onChange={onSelectAllClick}
                        />
                    </TableCell>
                    {columnData.map(column => {
                        return (
                            <TableCell
                                key={column.id}
                                numeric={column.numeric}
                                padding={
                                    column.disablePadding ? 'none' : 'default'
                                }
                                sortDirection={
                                    orderBy === column.id ? order : false
                                }
                            >
                                <Tooltip
                                    title="Sort"
                                    placement={
                                        column.numeric
                                            ? 'bottom-end'
                                            : 'bottom-start'
                                    }
                                    enterDelay={300}
                                >
                                    <TableSortLabel
                                        active={orderBy === column.id}
                                        direction={order}
                                        onClick={this.createSortHandler(
                                            column.id,
                                        )}
                                    >
                                        {column.label}
                                    </TableSortLabel>
                                </Tooltip>
                            </TableCell>
                        );
                    }, this)}
                </TableRow>
            </TableHead>
        );
    }
}

export default EnhancedTableHead;
