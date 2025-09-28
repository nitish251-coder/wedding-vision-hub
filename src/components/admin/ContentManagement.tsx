import { useState } from "react";
import { Plus, Edit, Trash2, Upload, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ContentManagement = () => {
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "10 Essential Wedding Planning Tips",
      author: "Admin",
      publishDate: "2024-01-15",
      status: "published",
      views: 1245
    },
    {
      id: 2,
      title: "Budget-Friendly Wedding Decoration Ideas",
      author: "Admin",
      publishDate: "2024-01-10",
      status: "published",
      views: 892
    }
  ]);

  const [realWeddings, setRealWeddings] = useState([
    {
      id: 1,
      coupleName: "Arjun & Priya",
      location: "Mumbai",
      budget: "₹12 Lakhs",
      theme: "Traditional",
      publishDate: "2024-01-12",
      status: "published"
    }
  ]);

  const [newBlog, setNewBlog] = useState({
    title: "",
    content: "",
    excerpt: "",
    tags: "",
    metaDescription: ""
  });

  const [newWedding, setNewWedding] = useState({
    coupleName: "",
    location: "",
    budget: "",
    theme: "",
    story: "",
    vendors: "",
    tips: ""
  });

  const handleAddBlog = () => {
    const blog = {
      id: blogs.length + 1,
      title: newBlog.title,
      author: "Admin",
      publishDate: new Date().toISOString().split('T')[0],
      status: "published",
      views: 0
    };
    setBlogs([...blogs, blog]);
    setNewBlog({ title: "", content: "", excerpt: "", tags: "", metaDescription: "" });
  };

  const handleAddWedding = () => {
    const wedding = {
      id: realWeddings.length + 1,
      coupleName: newWedding.coupleName,
      location: newWedding.location,
      budget: newWedding.budget,
      theme: newWedding.theme,
      publishDate: new Date().toISOString().split('T')[0],
      status: "published"
    };
    setRealWeddings([...realWeddings, wedding]);
    setNewWedding({ coupleName: "", location: "", budget: "", theme: "", story: "", vendors: "", tips: "" });
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">Content Management</h2>

      <Tabs defaultValue="blogs" className="space-y-6">
        <TabsList>
          <TabsTrigger value="blogs">Blog Posts</TabsTrigger>
          <TabsTrigger value="weddings">Real Weddings</TabsTrigger>
        </TabsList>

        <TabsContent value="blogs">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Blog Management</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add New Blog Post
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Create New Blog Post</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="blog-title">Post Title</Label>
                      <Input
                        id="blog-title"
                        value={newBlog.title}
                        onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                        placeholder="Enter blog post title"
                      />
                    </div>
                    <div>
                      <Label htmlFor="blog-excerpt">Excerpt</Label>
                      <Textarea
                        id="blog-excerpt"
                        value={newBlog.excerpt}
                        onChange={(e) => setNewBlog({...newBlog, excerpt: e.target.value})}
                        placeholder="Brief description for the blog post"
                        rows={2}
                      />
                    </div>
                    <div>
                      <Label htmlFor="blog-content">Content</Label>
                      <Textarea
                        id="blog-content"
                        value={newBlog.content}
                        onChange={(e) => setNewBlog({...newBlog, content: e.target.value})}
                        placeholder="Write your blog content here..."
                        rows={10}
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="blog-tags">Tags</Label>
                        <Input
                          id="blog-tags"
                          value={newBlog.tags}
                          onChange={(e) => setNewBlog({...newBlog, tags: e.target.value})}
                          placeholder="wedding, planning, tips (comma separated)"
                        />
                      </div>
                      <div>
                        <Label htmlFor="blog-meta">Meta Description</Label>
                        <Input
                          id="blog-meta"
                          value={newBlog.metaDescription}
                          onChange={(e) => setNewBlog({...newBlog, metaDescription: e.target.value})}
                          placeholder="SEO description (max 160 characters)"
                        />
                      </div>
                    </div>
                    <div>
                      <Label>Featured Image</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-500">Upload featured image for blog post</p>
                        <Button variant="outline" className="mt-2">Choose Image</Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-6">
                    <Button variant="outline">Save as Draft</Button>
                    <Button onClick={handleAddBlog}>
                      <Save className="w-4 h-4 mr-2" />
                      Publish Post
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Author</TableHead>
                      <TableHead>Publish Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Views</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {blogs.map((blog) => (
                      <TableRow key={blog.id}>
                        <TableCell className="font-medium">{blog.title}</TableCell>
                        <TableCell>{blog.author}</TableCell>
                        <TableCell>{blog.publishDate}</TableCell>
                        <TableCell>
                          <Badge variant="default">{blog.status}</Badge>
                        </TableCell>
                        <TableCell>{blog.views}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="weddings">
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-semibold">Real Weddings Management</h3>
              <Dialog>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="w-4 h-4 mr-2" />
                    Add Real Wedding
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                  <DialogHeader>
                    <DialogTitle>Add Real Wedding Story</DialogTitle>
                  </DialogHeader>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="couple-name">Couple Names</Label>
                        <Input
                          id="couple-name"
                          value={newWedding.coupleName}
                          onChange={(e) => setNewWedding({...newWedding, coupleName: e.target.value})}
                          placeholder="John & Jane"
                        />
                      </div>
                      <div>
                        <Label htmlFor="wedding-location">Location</Label>
                        <Input
                          id="wedding-location"
                          value={newWedding.location}
                          onChange={(e) => setNewWedding({...newWedding, location: e.target.value})}
                          placeholder="Mumbai, India"
                        />
                      </div>
                      <div>
                        <Label htmlFor="wedding-budget">Total Budget</Label>
                        <Input
                          id="wedding-budget"
                          value={newWedding.budget}
                          onChange={(e) => setNewWedding({...newWedding, budget: e.target.value})}
                          placeholder="₹10 Lakhs"
                        />
                      </div>
                      <div>
                        <Label htmlFor="wedding-theme">Wedding Theme</Label>
                        <Input
                          id="wedding-theme"
                          value={newWedding.theme}
                          onChange={(e) => setNewWedding({...newWedding, theme: e.target.value})}
                          placeholder="Traditional, Modern, Destination, etc."
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="wedding-story">Love Story</Label>
                      <Textarea
                        id="wedding-story"
                        value={newWedding.story}
                        onChange={(e) => setNewWedding({...newWedding, story: e.target.value})}
                        placeholder="Tell their love story and wedding details..."
                        rows={6}
                      />
                    </div>
                    <div>
                      <Label htmlFor="wedding-vendors">Vendors Used</Label>
                      <Textarea
                        id="wedding-vendors"
                        value={newWedding.vendors}
                        onChange={(e) => setNewWedding({...newWedding, vendors: e.target.value})}
                        placeholder="List vendors with their services (one per line)"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label htmlFor="wedding-tips">Planning Tips</Label>
                      <Textarea
                        id="wedding-tips"
                        value={newWedding.tips}
                        onChange={(e) => setNewWedding({...newWedding, tips: e.target.value})}
                        placeholder="Share planning tips and advice for future couples"
                        rows={4}
                      />
                    </div>
                    <div>
                      <Label>Wedding Photos</Label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                        <Upload className="w-8 h-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-sm text-gray-500">Upload wedding photos (multiple images)</p>
                        <Button variant="outline" className="mt-2">Choose Photos</Button>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end space-x-2 mt-6">
                    <Button variant="outline">Save as Draft</Button>
                    <Button onClick={handleAddWedding}>
                      <Save className="w-4 h-4 mr-2" />
                      Publish Wedding
                    </Button>
                  </div>
                </DialogContent>
              </Dialog>
            </div>

            <Card>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Couple</TableHead>
                      <TableHead>Location</TableHead>
                      <TableHead>Budget</TableHead>
                      <TableHead>Theme</TableHead>
                      <TableHead>Publish Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {realWeddings.map((wedding) => (
                      <TableRow key={wedding.id}>
                        <TableCell className="font-medium">{wedding.coupleName}</TableCell>
                        <TableCell>{wedding.location}</TableCell>
                        <TableCell>{wedding.budget}</TableCell>
                        <TableCell>{wedding.theme}</TableCell>
                        <TableCell>{wedding.publishDate}</TableCell>
                        <TableCell>
                          <Badge variant="default">{wedding.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="ghost">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ContentManagement;