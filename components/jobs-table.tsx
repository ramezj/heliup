"use client"
import { useState } from "react"
import React from "react"
import { Job } from "@prisma/client"
import {
    ColumnDef,
    ColumnFiltersState,
    SortingState,
    VisibilityState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
  } from "@tanstack/react-table"
  import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  import { Checkbox } from "./ui/checkbox"
  import { Button } from "./ui/button"
  import { ArrowUpDown, MoreHorizontal } from "lucide-react"

export function JobsTable({ jobs }: { jobs: Job[] }) {
    const [ data, setData ] = useState<Job[]>(jobs);
    const [ pagination, setPagination ] = useState({ pageIndex: 0, pageSize: 5});
    const columnDef: ColumnDef<Job>[] = [
        {
            id: "select",
            header: ({ table }) => (
              <Checkbox
                checked={
                  table.getIsAllPageRowsSelected() ||
                  (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
                aria-label="Select all"
              />
            ),
            cell: ({ row }) => (
                <Checkbox
                  checked={row.getIsSelected()}
                  onCheckedChange={(value) => row.toggleSelected(!!value)}
                  aria-label="Select row"
                />
              ),
              enableSorting: false,
              enableHiding: false,
        },
        {
            accessorKey: "title",
            header: "Title",
            cell: ({ row }) => <p>{row.getValue("title")}</p>,
            enableResizing: false,
            size: 450
        },
        {
            accessorKey: "type",
            header: "Type",
            enableResizing: false,
            cell: ({ row }) => <p>{row.getValue("type")}</p>
        },
        {
          id: "actions",
          enableHiding: false,
          enableResizing: false,
          cell: ({ row }) => <Button variant={"ghost"} className="h-8 w-8 p-0"><MoreHorizontal className="h-4 w-4" /></Button>
        }
    ]
    const table = useReactTable({
        columns: columnDef,
        data,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onPaginationChange: setPagination,
        state: {
          pagination
        }
    })
    return (
       <>
    <div className="rounded-md border">
       <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columnDef.length}
                  className="h-24 text-center"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        </div>
        <div className="flex items-center justify-end space-x-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant="outline"
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
       </>
    )
}