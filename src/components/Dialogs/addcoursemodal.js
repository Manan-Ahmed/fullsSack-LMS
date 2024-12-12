"use client"
import * as React from "react"

import { cn } from "@/lib/utils"
// import { useMediaQuery } from "@/hooks/use-media-query"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export function CourseDialog() {
  const [open, setOpen] = React.useState(false)
  const isDesktop = true

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">Add Course </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add Course </DialogTitle>
           
          </DialogHeader>
          <CourseForm />
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">Add Course  </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Add Course</DrawerTitle>
          <DrawerDescription>
            You Can Add Course
          </DrawerDescription>
        </DrawerHeader>
        <CourseForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

function CourseForm({ className }) {
  return (
    <form className={cn("grid items-start gap-4", className)}>
      <div className="grid gap-2">
        <Label htmlFor="course">Course</Label>
        <Input type="text" id="course" defaultValue="" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="duration">Duration</Label>
        <Input id="duration" defaultValue="Duration" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="description">Dscription</Label>
        <Input id="description" defaultValue="Description" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="status">Status</Label>
        <Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="Status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="active">Active</SelectItem>
    <SelectItem value="not active">Not Active</SelectItem>
  </SelectContent>
</Select>

      </div>
      <Button type="submit">Save changes</Button>
    </form>
  )
}
