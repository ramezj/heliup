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

export function JobsTable({ jobs }: { jobs: Job[] }) {
    const [ data, setData ] = useState<Job[]>(jobs);
    const columnDef: ColumnDef<Job>[] = [
        {
           accessorKey: "id",
           header: "id",
           cell: ({ row }) => <p>{row.getValue("id")}</p>
        },
        {
            accessorKey: "title",
            header: "Title",
            cell: ({ row }) => <p>{row.getValue("title")}</p>
        },
        {
            accessorKey: "type",
            header: "Type",
            cell: ({ row }) => <p>{row.getValue("type")}</p>
        }
    ]
    const table = useReactTable({
        columns: columnDef,
        data,
        getCoreRowModel: getCoreRowModel()
    })
    return (
       <>
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

       </>
    )
}